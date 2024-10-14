"use client";

const x = Math.random();
export default function Home() {
  console.log("logging random num", x);
  return (
    <div suppressHydrationWarning>
      {/* // This is just one way */}
      {x}
    </div>
  );
}
