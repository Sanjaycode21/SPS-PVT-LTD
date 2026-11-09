import json
import re

with open('products_raw.json', encoding='utf-8') as f:
    data = json.load(f)

parsed = []
for item in data:
    txt = item['name_and_intermediate'].strip()
    sno = item['sno'].strip()
    cas = item['cas'].strip()
    
    # Check for known intermediate/application signatures
    keywords = [
        "Potential for OLEDs", "(OLEDs)", "Dexrazoxane intermediate", "Tofacitinib intermediate",
        "Alatrofloxacin intermediate", "Misoprostol intermediate", "Abrocitinib intermediate",
        "Pitolisant intermediate", "Glycopyrronium bromide intermediate", "Mebeverine intermediate",
        "Granisetron intermediate", "1-isopropylurea", "Methocarbamol intermediate", "Silodosin intermediate",
        "paracetamol", "Trazodone intermediate", "Propofol intermediate", "Sulfametrole intermediate",
        "Sugammadex intermediate", "Fenofibrate intermediate", "Anastrozole intermediate",
        "Bicalutamide intermediate", "Edaravone intermediate", "LENALIDOMIDE intemediate",
        "LETROZOLE intermediate", "POMALIDOMIDE intermediate", "Rivaroxaban intermediate",
        "used in skincare products", "Bilastine intermediate", "Used primarily in sunscreens and other cosmetic products",
        "Diltiazem intermediate", "Remdesivir", "L-Ribose intermediate"
    ]
    
    app = ""
    name = txt
    for kw in keywords:
        pattern = re.compile(re.escape(kw), re.IGNORECASE)
        match = pattern.search(txt)
        if match:
            app = match.group(0).strip()
            # Clean up the name part
            name = txt[:match.start()].strip()
            # If name is empty, it means txt was just the keyword or name itself
            if not name:
                name = txt
                app = ""
            break
            
    name = name.rstrip('. ')
    
    # Determine category strictly based on client terminology
    category = "Speciality Molecules & API Intermediates"
    if "OLED" in app or "OLED" in name:
        category = "Speciality Molecules (OLEDs)"
    elif any(x in app.lower() for x in ["skincare", "sunscreens", "cosmetic"]):
        category = "Fine Chemicals & Cosmetic Intermediates"
    elif app:
        category = "Active Pharmaceutical Intermediates"
    
    parsed.append({
        "sno": int(sno) if sno.isdigit() else sno,
        "name": name,
        "cas": cas if cas else "Available on Enquiry",
        "hasCas": bool(cas),
        "intermediateOf": app if app else "Speciality Synthesis",
        "category": category
    })

print(f"Total parsed items: {len(parsed)}")
categories = set(p['category'] for p in parsed)
print("Categories:", categories)

with open('src/data/products.json', 'w', encoding='utf-8') as f:
    json.dump(parsed, f, indent=2)
print("Written src/data/products.json successfully")
