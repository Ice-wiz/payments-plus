import React from "react";
import qrCode from "../../assets/qr-code.png";

export const Feature2 = () => {
  return (
    <div className="bg-gradient-to-br from-purple-400 to-pink-500/70 rounded-xl flex items-center p-8 max-w-[520px] mx-auto">
      <div className="bg-white rounded-xl p-4 max-w-[180px] max-h-[180px]">
        <img
          src={qrCode}
          className="rounded-xl w-full h-full object-contain"
          alt="qr code"
        />
      </div>
      <div className="ml-6">
        <h2 className="font-bold text-3xl text-white mb-4">
          A personal QR Code for your profile
        </h2>
        <p className="text-white text-lg">
          Accept payments easily with this QR code. Simply share it with others and get paid effortlessly.
        </p>
      </div>
    </div>
  );
};
