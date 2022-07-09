/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const btn = tw`w-12 h-12 flex justify-center bg-white items-center border(gray-100 1) hover:bg-gray-200 rounded-xl shadow-2xl`;
  return (
    <div class={tw`flex justify-between items-center px-6 md:px-8 w-full`}>
      <div class={tw`flex flex-row space-x-4 justify-center items-center`}>
        <span class={tw`font-bold text-2xl text-white`}>{count}</span>
        <span class={tw`w-auto h-auto p-2 rounded-xl mt-0 bg-rose-600 shadow-2xl`}>
          <svg class={tw`w-4 h-4 bi bi-heart-fill text-white`} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg>
        </span>
      </div>
      <div class={tw`flex flex-row space-x-4 w-auto h-auto`}>
        <button
          class={btn}
          onClick={() => setCount(count - 1)}
          disabled={!IS_BROWSER}
        >
          <span class={tw`w-auto h-auto`}>
            <svg class={tw`w- 4 h-4`} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,48H80a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M80,152l40,80a32,32,0,0,0,32-32V176h61.9a15.9,15.9,0,0,0,15.8-18l-12-96a16,16,0,0,0-15.8-14H80" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
          </span>
        </button>
        <button
          class={btn}
          onClick={() => setCount(count + 1)}
          disabled={!IS_BROWSER}
        >
          <span class={tw`w-auto h-auto`}>
            <svg class={tw`w- 4 h-4`} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
          </span>
        </button>
      </div>
    </div>
  );
}
