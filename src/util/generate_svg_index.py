import os
import re

#  获取所有的SVG文件

indexts = open("./src/components/Icon/svg/index.ts", "w+")
utilts = open("./src/components/Icon/util.ts", "w+")
KeyWord = ["delete", "export", "import"]


def GetAllSVG():
    path = "./src/components/Icon/svg"  # 文件夹目录
    files = os.listdir(path)  # 得到文件夹下的所有文件名称
    print("files- --", files)
    return files


def GetSVGName(string):
    index = string.find(".svg")
    if index == -1:
        return -1
    name = re.sub(r'[0-9]+|-| ', '', string[:index])
    if name in KeyWord:
        return name+"_"
    return name


def WriteIntoIndexTS(string):
    indexts.write(str(string)+"\n")


def WriteIntoUtilTS(string):
    utilts.write(str(string)+"\n")


def WriteIndexTS(SVGFile):
    SVGName = []
    SVGDict = {}
    for ele in SVGFile:
        name = GetSVGName(ele)
        if name == -1:
            continue
        SVGName.append(name)
        WriteIntoIndexTS(
            "import "+name + " from \'./"+ele+"\';")
    WriteIntoIndexTS("export {")
    for ele in SVGName:
        WriteIntoIndexTS("  "+ele+",")
    WriteIntoIndexTS("}")


def WriteUtilTS(SVGFile):
    WriteIntoUtilTS("import * as SVG from \"./svg/index\"")
    WriteIntoUtilTS(
        "export function StringMapIntoSVG(name: string | undefined): string | undefined {")
    WriteIntoUtilTS("   let obj: { [key: string]: string } = {")
    SVGName = []
    for ele in SVGFile:
        name = GetSVGName(ele)
        if name == -1:
            continue
        SVGName.append(name)
    for ele in SVGName:
        WriteIntoUtilTS("       "+ele+": SVG."+ele+",")
    WriteIntoUtilTS("} \n   return name ? obj[name] : name \n }")
    pass


SvgFile = GetAllSVG()
# 生成SVG对应的index文件
WriteIndexTS(SvgFile)
# 生成SVG对应的Util文件
WriteUtilTS(SvgFile)
