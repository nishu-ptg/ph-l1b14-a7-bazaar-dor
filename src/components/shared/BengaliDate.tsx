"use client";

function BengaliDate() {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return date;
}

export default BengaliDate;
