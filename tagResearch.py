import os

v1_path = "../cheeseepedia/content/wiki/"

tags = []

for root, dirs, files in os.walk(v1_path):
  for name in files:
    page = ""

    with open(v1_path + name, "r", encoding="utf-8") as pagefile:
      page = pagefile.read()
    
    parts = page.split("+++", 2)
    toml = parts[1].strip()
    toml_array = toml.split("\n")

    for line in toml_array:
      if line.startswith("tags"):
        start = line.find("[")
        line = line[start:]
        tags.append(line)
        if line == "[]":
          print(name)

tags = sorted(set(tags))
print("---")

for tag in tags:
  print(tag)