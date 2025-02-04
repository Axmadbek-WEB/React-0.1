import logo from './logo.svg';
import './App.css';

import React from "react";

function App() {
  return (
    <div style={{margin: "20px" }}>
      <h1>Welcome to React JS</h1>
      <h2>This is my first React app</h2>
      <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>React</li>
      </ol>
      <h3>What is React</h3>
      <p>
        React nima? React — bu Facebook tomonidan yaratilgan ochiq kodli
        JavaScript kutubxonasi bo‘lib, asosan foydalanuvchi interfeyslarini (UI)
        yaratish uchun mo‘ljallangan. U yagona sahifali ilovalar (single-page
        applications) va dinamik, sezgir veb-ilovalarni ishlab chiqishda keng
        qo‘llaniladi.
      </p>
      <h3>What is Single-page application (SPA)</h3>
      <p>
        SPA (Single Page Application) — bu bitta sahifali veb-ilova bo‘lib, unda
        sahifa kontenti dinamik ravishda yangilanadi va foydalanuvchining har bir
        amalida butun sahifani qaytadan yuklash talab qilinmaydi. JavaScript
        yordamida faqat kerakli kontent o‘zgaritiriladi, bu esa ilovani tezkor va
        foydalanuvchi uchun qulay qiladi.
      </p>
    </div>
  );
}

export default App;