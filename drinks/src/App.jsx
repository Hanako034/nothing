import { useState } from 'react'
import { ChevronRight, Home, FileText, QrCode, Trash2, User } from 'lucide-react';
import { IoPersonCircle } from "react-icons/io5";
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('profile');

  const menuItems = [
    { icon: 'images/1.jpg', text: 'Төрд байгаа миний мэдээлэл', iconColor: '#f97316' },
    { icon: 'images/2.jpg', text: 'Цахим хэтэвч', iconColor: '#3b82f6' },
  ];
  const single = [
    { icon: 'images/3.jpg', text: 'Үйлчилгээний түүх', iconColor: '#3b82f6', hasCheck: true },
  ];
  const serviceItems = [
    { icon: 'images/4.jpg', text: 'Үндэсний шуудан', iconColor: '#f97316' },
    { icon: 'images/5.jpg', text: 'Таларxал', iconColor: '#a855f7' },
    { icon: 'images/6.jpg', text: 'Судалгаа', iconColor: '#3b82f6', hasCheck: true },
    { icon: 'images/7.jpg', text: 'Санал, гомдол', iconColor: '#f97316' },
    { icon: 'images/8.jpg', text: 'Баталгаажуулалт', iconColor: '#10b981', hasCheck: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ddeefe] flex-col flex  from-20% to-50% pb-[70px]  to-[#f3f6fb] pt-[42px] px-[20px]">

      <div className="bg-white   rounded-2xl p-[18px] shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="Profile"
            className="w-14 h-14 rounded-full"
          />
          <div>
            <h2 className="text-blue-600 font-semibold text-lg">А.Алтандөл</h2>
            <p className="text-gray-600 text-sm">990099265967@e-mongolia.mn</p>
          </div>
        </div>
        <ChevronRight className="text-gray-400" size={24} />
      </div>

      <div className="px-4 mt-6 mb-3 flex justify-between items-center">
        <h3 className="text-gray-800 font-semibold text-lg">Миний бичиг баримтууд</h3>
        <button className="text-sm font-medium bg-white px-4 py-2 rounded-full shadow-sm">
          Шинэчлэх
        </button>
      </div>

      <div className='w-[100%] flex justify-center mb-[15px]'>
        <button className="w-[50%] bold m-auto mt-3 font-bold justify-center text-[10px] bg-white text-[#0e69e9] py-4 px-2 rounded-xl shadow-sm">
          Бүх бичиг баримтыг харах
        </button>
      </div>



      <div className='bg-white rounded-xl p-[6px] mb-[15px]'>
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} isLast={index === menuItems.length - 1} />
        ))}
      </div>
      <div className='bg-white rounded-xl p-[6px] mb-[15px]'>
        {single.map((item, index) => (
          <MenuItem key={index} {...item} isLast={index === menuItems.length - 1} />
        ))}
      </div>
      <div className='bg-white rounded-xl p-[6px] mb-[15px]'>
        {serviceItems.map((item, index) => (
          <MenuItem key={index} {...item} isLast={index === serviceItems.length - 1} />
        ))}
      </div>
      <div className='bg-white rounded-xl p-[6px] mb-[15px]'>
        <MenuItem icon={'images/9.jpg'} text={'Системээс гарах'} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
        <NavItem
          icon={'images/nav1.jpg'}
          label="Нүүр"
          active={activeTab === 'home'}
          onClick={() => setActiveTab('home')}
        />
        <NavItem
          icon={'images/nav2.jpg'}
          label="Үйлчилгээ"
          active={activeTab === 'service'}
          onClick={() => setActiveTab('service')}
        />


        <div className='flex flex-col  -mt-12 rounded-full '>
<img src={'images/nav3.png'} className='w-[70px]' alt="" />

         
        </div>



        <NavItem
          icon={'images/nav4.jpg'}
          label="Нөмөлт"
          active={activeTab === 'trash'}
          onClick={() => setActiveTab('trash')}
        />
        <NavItem
          icon={'images/nav5.jpg'}
          label="Профайл"
          active={activeTab === 'profile'}
          onClick={() => setActiveTab('profile')}
        />
      </div>
    </div>
  )
}

export default App


function MenuItem({ icon, text, }) {
  return (
    <div className=" p-[8px] pr-[15px] flex items-center justify-between   ">
      <div className="flex items-center gap-3">
        <img src={icon} alt="" className='w-[40px]' />
        <span className="font-medium text-gray-800">{text}</span>
      </div>
      <ChevronRight className="text-gray-400" size={24} />
    </div>
  );
}




function NavItem({ icon, label, active, onClick }) {
  return (
    <div className='flex flex-col justify-center'>

      <button
        onClick={onClick}
        className={`flex flex-col items-center gap-1 ${active ? 'text-blue-600' : 'text-gray-400'}`}
      >
        <img src={icon} className='w-[24px]' alt="" />

        {label && <span className="text-xs font-medium">{label}</span>}
      </button>
    </div>
  );
}