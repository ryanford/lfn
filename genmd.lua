local filesize = (function(size)
	return size:sub(size:find("^%d+")) .. "b"
end)(io.popen[[du -b "../dist/elfn.js"]]:read("*a"))
local src = io.open("README.md"):read("*a")
local out = io.open("../README.md", "w+")
local md = src:gsub("{{filesize}}", filesize)
out:write(md)
out:close()

os.exit(0, true)
