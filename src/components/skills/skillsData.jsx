import {
  FaJava, FaPython, FaReact, FaDatabase, FaServer, FaCode,
  FaLaptopCode, FaChartLine, FaChartBar, FaGlobe
} from "react-icons/fa";
import {
  SiCplusplus, SiMongodb, SiPandas, SiNumpy, SiScikitlearn, SiJupyter, SiGooglecolab, SiVercel,
  SiGithub, SiIntellijidea, SiC, SiNodedotjs, SiExpress
} from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { BsFiletypeHtml, BsFiletypeCss } from "react-icons/bs";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io5";

export const iconComponents = {
  "FaJava": <FaJava />,"FaPython": <FaPython />,"FaReact": <FaReact />,"FaDatabase": <FaDatabase />,
  "FaServer": <FaServer />,"FaCode": <FaCode />,"FaLaptopCode": <FaLaptopCode />,
  "FaChartLine": <FaChartLine />,"FaChartBar": <FaChartBar />,"FaGlobe": <FaGlobe />,
  "SiCplusplus": <SiCplusplus />,"SiMongodb": <SiMongodb />,"SiPandas": <SiPandas />,
  "SiNumpy": <SiNumpy />,"SiScikitlearn": <SiScikitlearn />,"SiJupyter": <SiJupyter />,
  "SiGooglecolab": <SiGooglecolab />,"SiVercel": <SiVercel />,"SiGithub": <SiGithub />,
  "SiIntellijidea": <SiIntellijidea />,"SiC": <SiC />,"SiNodedotjs": <SiNodedotjs />,
  "SiExpress": <SiExpress />,"DiMysql": <DiMysql />,"BsFiletypeHtml": <BsFiletypeHtml />,
  "BsFiletypeCss": <BsFiletypeCss />,"VscJson": <VscJson />,"IoLogoJavascript": <IoLogoJavascript />,
  "VSCode": <span className="font-bold text-blue-600 dark:text-blue-400">VS</span>
};

const skillsData = {
  "Programming Languages": [
    ["C", "SiC", "blue"],
    ["C++", "SiCplusplus", "blue"],
    ["Java", "FaJava", "orange"],
    ["Python", "FaPython", "yellow"],
  ],
  "Frontend Development": [
    ["HTML5", "BsFiletypeHtml", "orange"],
    ["CSS3", "BsFiletypeCss", "blue"],
    ["JavaScript", "IoLogoJavascript", "yellow"],
    ["ReactJS", "FaReact", "sky"],
  ],
  "Backend Development": [
    ["NodeJS", "SiNodedotjs", "green"],
    ["ExpressJS", "SiExpress", "gray"],
    ["RESTful APIs", "VscJson", "emerald"],
  ],
  "Data Science & ML": [
    ["NumPy", "SiNumpy", "blue"],
    ["Pandas", "SiPandas", "indigo"],
    ["Matplotlib", "FaChartLine", "purple"],
    ["Seaborn", "FaChartBar", "violet"],
    ["Scikit-Learn", "SiScikitlearn", "amber"],
  ],
  "Databases & Storage": [
    ["MySQL", "DiMysql", "blue"],
    ["MongoDB", "SiMongodb", "green"],
  ],
  "Tools & Platforms": [
    [
      "VS Code",
      "VSCode",
      "",
    ],
    ["Jupyter Notebook", "SiJupyter", "orange"],
    ["Google Colab", "SiGooglecolab", "yellow"],
    ["IntelliJ IDEA", "SiIntellijidea", "purple"],
    ["Vercel", "SiVercel", "gray"],
    ["GitHub", "SiGithub", "gray"],
  ],
  "Core CS Subjects": [
    ["DSA", "FaCode", "cyan"],
    ["OOP", "FaLaptopCode", "purple"],
    ["OS", "FaServer", "emerald"],
    ["DBMS", "FaDatabase", "teal"],
    ["CN", "FaGlobe", "sky"],
  ],
};

export default skillsData;