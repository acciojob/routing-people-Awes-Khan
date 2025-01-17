
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersItem from "./UsersItem";
import Home from "./Home";

const App = () => {
  const data = [
    {
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org"
    },
    {
      name: "Aarav",
      username: "aarav_01",
      email: "aarav@accio.com",
      phone: 9876543210,
      website: "aarav.dev"
    },
    {
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      phone: 1-463-123-4447,
      website: "ramiro.info"
    },
    {
      name: "Ishaan",
      username: "ishaan.innovate",
      email: "ishaan@accio.com",
      phone: 9988776655,
      website: "ishaan.tech"
    },
    {
      name: "Sanya",
      username: "sanya123",
      email: "sanya@accio.com",
      phone: 9876512345,
      website: "sanya.create"
    },
    {
      name: "Rohit",
      username: "rohit.pro",
      email: "rohit@accio.com",
      phone: 9123456780,
      website: "rohitdev.com"
    },
    {
      name: "Tanya",
      username: "tanya.tech",
      email: "tanya@accio.com",
      phone: 9345612301,
      website: "tanya.dev"
    },
    {
      name: "Anika",
      username: "anika.coder",
      email: "anika@accio.com",
      phone: 9123467890,
      website: "anika.codes"
    },
    {
      name: "Rahul",
      username: "rahul_creator",
      email: "rahul@accio.com",
      phone: 9988776600,
      website: "rahulcreative.tech"
    },
    {
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Email: Rey.Padberg@karina.biz",
      phone: "024-648-3804",
      website: "ambrose.net"
    }
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users/:id" element={<UsersItem data={data}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
