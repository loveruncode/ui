import React from 'react';
import { useEffect,useState } from 'react';
import './Login.css';
import img1 from '../../images/login.jpg';
import axios from 'axios';

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const [masvValues, setMasvValues] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/student');
        console.log('Dữ liệu trả về từ API khi load trang:', response.data);
        const masvValues = response.data.map(student => student.masv);
        console.log('Giá trị của key "masv":', masvValues);
        setMasvValues(masvValues); // Cập nhật giá trị masvValues
      } catch (error) {
        console.error('Đã xảy ra lỗi khi gửi yêu cầu:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    // Kiểm tra nếu giá trị nhập vào tồn tại trong masvValues
    if (masvValues.includes(inputValue)) {
      alert('Đăng nhập thành công');
    } else {
      alert('Đăng nhập thất bại');
    }
  };

  
  return (
    <div>
      {/* Header */}
      <header>
        {/* Your header content goes here */}
      </header>

      {/* Main content */}
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <div className='hidden sm:block'>
          <img className='w-full h-full object-cover' src={img1} alt='' />
        </div>

        <div className='bg-gray-800 flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
            <h2 className='text-4xl dark:text-white font-bold text-center'>LOGIN</h2>
            <div className='flex flex-col text-gray-400 py-2'>
              <label>Mã Giáo Viên/ Sinh Viên</label>
              <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type='text' />
              <button
              onClick={handleButtonClick}
              className='w-full my-5 py-2 bg-teal-500 shadow-lg shawdow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Đăng Nhập</button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
}
