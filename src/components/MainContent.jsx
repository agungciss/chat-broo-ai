// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Context } from "../context/Context";
import girlLogo from "../assets/cantik.jpeg";
import shinjiProfile from "../assets/hirakost.jpeg";
import soundEffect from "../assets/sakasama.mp3"; // Import file audio

const MainContent = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  const [isRotated, setIsRotated] = useState(false); // State untuk rotasi
  const audioRef = useRef(null); // Ref untuk elemen audio

  const handleRotate = () => {
    if (!isRotated) {
      // Memutar backsound hanya saat memutar 180 derajat
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
    setIsRotated(!isRotated); // Toggle state rotasi
  };

  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Selamat Pagi";
    } else if (currentHour >= 12 && currentHour < 15) {
      return "Selamat Siang";
    } else if (currentHour >= 15 && currentHour < 18) {
      return "Selamat Sore";
    } else {
      return "Selamat Malam";
    }
  };

  return (
    <div className={`flex-1 min-h-screen pb-[15vh] relative bg-[#f5f5f5] border-2 border-[#000] shadow-[8px_8px_0_#000000] ${isRotated ? "animate-rotate-180" : ""}`}>
      {/* Elemen audio untuk backsound */}
      <audio ref={audioRef} src={soundEffect} />

      <div className="flex items-center justify-between text-3xl p-5 text-black bg-blue-400 border-4 border-[#000] rounded-b-3xl">
        <p className="font-bold font-mias">ChatBroo AI </p>
        <img src={girlLogo} alt="" className="w-10 rounded-full border-2 border-[#000]" />
      </div>

      <div className="max-w-[900px] mx-auto">
        {!showResult ? (
          <>
            <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
              <p className="text-blue-500 font-mias">{getGreeting()}, Cees!</p>
              <p className="text-blue-500 font-mias">Ado yang biso aku bantu?</p>
            </div>
          </>
        ) : (
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hidden">
            <div className="my-10 mx-0 flex flex-col items-end gap-3">
              <div className="flex items-center justify-end gap-3">
                <p className="text-lg font-[400] leading-[1.8] bg-blue-400 text-black font-mias rounded-lg px-4 py-2 max-w-full border-4 border-black shadow-[4px_4px_0_#000000] whitespace-normal break-words overflow-x-hidden sm:overflow-x-auto">
                  {recentPrompt}
                </p>
                <img src={girlLogo} alt="" className="w-10 rounded-full border-2 border-[#333]" />
              </div>
            </div>

            <div className="flex items-start gap-5 mb-12">
              <img src={shinjiProfile} alt="" className="w-10 rounded-full border-2 border-[#333]" />

              {loading ? (
                <div className="w-full flex flex-col gap-2">
                  <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
                  <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
                  <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffffff] to-[#81cafe] p-4 animate-scroll-bg" />
                </div>
              ) : (
                <p
                  dangerouslySetInnerHTML={{ __html: resultData }}
                  className="text-lg font-[400] leading-[1.8] bg-pink-400 text-black font-mias rounded-xl px-4 py-2 max-w-full border-4 border-black shadow-[-4px_4px_0_#000000] whitespace-normal break-words overflow-x-hidden sm:overflow-x-auto"
                ></p>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5 mb-4">
          <div className="flex items-center justify-between gap-6 bg-[#f5f5f5] py-2 px-5 rounded-full border-4 border-[#3b82f6] shadow-[4px_4px_0_#64748b]">
            <input
              type="text"
              placeholder="Enter a prompt here..."
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg text-[#333]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && input.trim()) {
                  onSent();
                }
              }}
            />

            <div className="flex gap-4 items-center">
              <MdAddPhotoAlternate
                onClick={handleRotate} // Panggil fungsi handleRotate saat diklik
                className="text-xl sm:text-2xl cursor-pointer"
              />
              <IoMdSend
                onClick={() => input.trim() && onSent()}
                className="text-xl sm:text-2xl cursor-pointer"
              />
            </div>
          </div>
          <p className="text-sm my-4 mx-auto text-center font-[500] font-mias text-black">
            <a
              href="https://instagram.com/muhammadagpra_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <FaInstagram className="text-xl" />
              @muhammadagpra_
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;

