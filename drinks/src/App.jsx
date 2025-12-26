import { useState } from "react";
import {
  ChevronRight,
  Home,
  FileText,
  QrCode,
  Trash2,
  User,
} from "lucide-react";
import { IoPersonCircle } from "react-icons/io5";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isClosing, setIsClosing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };
  const menuItems = [
    {
      icon: "images/1.jpg",
      text: "Төрд байгаа миний мэдээлэл",
      iconColor: "#f97316",
    },
    { icon: "images/2.jpg", text: "Цахим хэтэвч", iconColor: "#3b82f6" },
  ];
  const single = [
    {
      icon: "images/3.jpg",
      text: "Үйлчилгээний түүх",
      iconColor: "#3b82f6",
      hasCheck: true,
    },
  ];
  const serviceItems = [
    { icon: "images/4.jpg", text: "Үндэсний шуудан", iconColor: "#f97316" },
    { icon: "images/5.jpg", text: "Таларxал", iconColor: "#a855f7" },
    {
      icon: "images/6.jpg",
      text: "Судалгаа",
      iconColor: "#3b82f6",
      hasCheck: true,
    },
    { icon: "images/7.jpg", text: "Санал, гомдол", iconColor: "#f97316" },
    {
      icon: "images/8.jpg",
      text: "Баталгаажуулалт",
      iconColor: "#10b981",
      hasCheck: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ddeefe] flex-col flex  from-1% to-20% pb-[70px]  to-[#f3f6fb] pt-[42px] px-[20px]">
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(100%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-fade-out {
          animation: fadeOut 0.3s ease-out;
        }
      `}</style>
      <div className="bg-white   rounded-2xl p-[18px] shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Profile"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-blue-600 font-semibold text-lg">temulen</h2>
            <p className="text-gray-600 text-sm">990096912356@e-mongolia.mn</p>
          </div>
        </div>
        <ChevronRight className="text-gray-400" size={24} />
      </div>

      <div className="pt-1 mt-2  flex justify-between items-center">
        <h3 className="text-gray-800 font-semibold text-base">
          Миний бичиг баримтууд
        </h3>
        <button className="text-xs font-medium bg-white px-4 py-2 rounded-full shadow-sm">
          Шинэчлэх
        </button>
      </div>

      <div>
        <img className="p-[30px] pb-[20px]" onClick={() => setIsOpen(true)} src="images/idcard.svg" alt="" />
        <div className="w-[100%] flex justify-center mb-[15px]">
          <button className="w-[50%] bold m-auto font-bold justify-center text-[10px] bg-white text-[#0e69e9] py-3 px-2 rounded-xl shadow-sm">
            Бүх бичиг баримтыг харах
          </button>
        </div>
      </div>

      <div>
        <div className="bg-white rounded-xl p-[6px] mb-[15px] ">
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isLast={index === menuItems.length - 1}
            />
          ))}
        </div>
        <div className="bg-white rounded-xl p-[6px] mb-[15px]">
          {single.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isLast={index === menuItems.length - 1}
            />
          ))}
        </div>
        <div className="bg-white rounded-xl p-[6px] mb-[15px]">
          {serviceItems.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              isLast={index === serviceItems.length - 1}
            />
          ))}
        </div>
        <div className="bg-white rounded-xl p-[6px] mb-[75px]">
          <MenuItem icon={"images/9.jpg"} text={"Системээс гарах"} />
        </div>
      </div>


      <div className="fixed pb-[30px] shadow-[0_-10px_10px_rgba(0,0,0,0.1)] bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
        <NavItem
          icon={"images/nav1.jpg"}
          label="Нүүр"
          active={activeTab === "home"}
          onClick={() => setActiveTab("home")}
        />
        <NavItem
          icon={"images/nav2.jpg"}
          label="Үйлчилгээ"
          active={activeTab === "service"}
          onClick={() => setActiveTab("service")}
        />

        <div className="flex flex-col  -mt-12 rounded-full  bg-white ">
          <img src={"images/nav3.png"} className="w-[70px] rounded-full  p-1 shadow-cyan-500/50 " alt="" />
        </div>

        <NavItem
          icon={"images/nav4.jpg"}
          label="Нөмөлт"
          active={activeTab === "trash"}
          onClick={() => setActiveTab("trash")}
        />
        <NavItem
          icon={"images/nav5.jpg"}
          label="Профайл"
          active={activeTab === "profile"}
          onClick={() => setActiveTab("profile")}
        />
      </div>



      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}"
            onClick={handleClose}
          />


          <div className={`fixed inset-x-0 bottom-0 z-50  ${isClosing ? 'animate-slide-down' : 'animate-slide-up'}`}>
            <div className=" bg-white rounded-t-3xl pt-[10px]">

              <div className="flex justify-center mb-2">
                <div className="w-10 h-1 bg-gray-400 rounded-full"></div>
              </div>
              <div className="text-[10px] w-full flex justify-center mb-2"> Иргэний үнэмлэх</div>
              <div className="h-[1px] bg-gray-300"></div>

              <div className="p-4 gap-[10px] flex flex-col">
                <img className="mb-[5px]" src="images/idcard.svg" alt="" />
                 <button className="w-full p-[10px] rounded-md  bg-blue-600 text-white">
                  Лавлагаа авах
                </button>
                 <button className="w-full p-[10px] rounded-md  bg-[#ddeefe] text-blue-600">
                  Лавлагаа авах
                </button>
              </div>
              
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

function MenuItem({ icon, text }) {
  return (
    <div className=" p-[8px] pr-[15px] flex items-center justify-between   ">
      <div className="flex items-center gap-3">
        <img src={icon} alt="" className="w-[40px]" />
        <span className="font-medium text-gray-800">{text}</span>
      </div>
      <ChevronRight className="text-gray-400" size={24} />
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div className="flex flex-col justify-center">
      <button
        onClick={onClick}
        className={`flex flex-col items-center gap-1 ${active ? "text-blue-600" : "text-gray-400"
          }`}
      >
        <img src={icon} className="w-[24px] mb-[5px]" alt="" />

        {label && <span className="text-xs font-medium">{label}</span>}
      </button>
    </div>
  );
}
