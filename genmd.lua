local filesize = io.popen[[du -b "../dist/elfn.js"]]:read("*a"):match("^%d+") .. "b"
local src = io.open("README.md"):read("*a")
local out = io.open("../README.md", "w+")
out:write(src:gsub("{{filesize}}", filesize))
out:close()

os.exit(0, true)
