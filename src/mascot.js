export function mascot(expression='saluto',extra='') {
  const face={
    saluto:'<path d="M69 143h22m21 0h22" /><path d="M72 139q8-8 16 0m27 0q8-8 16 0" fill="#fff4cf"/><path d="M91 165q12 6 22 0"/>',
    contento:'<ellipse cx="81" cy="143" rx="4" ry="7" fill="#171717"/><ellipse cx="122" cy="143" rx="4" ry="7" fill="#171717"/><path d="M89 161q13 17 27 0" fill="#fff"/>',
    dispiaciuto:'<path d="M69 141h22m20 0h23"/><path d="M75 141v8m48-8v8"/><path d="M91 170q13-12 26 0"/><path d="M143 128q15 19 0 20q-12-2 0-20" fill="#b8e7f5" stroke-width="3"/>',
    festa:'<path d="M69 146q12-17 23 0m18 0q12-17 23 0"/><path d="M88 161q15 26 30 0Z" fill="#fff"/>'
  };
  return `<svg class="mascot ${extra}" viewBox="0 0 220 240" role="img" aria-label="Patatino, ${expression}" xmlns="http://www.w3.org/2000/svg">
  <g stroke="#171717" stroke-width="4.5" stroke-linejoin="round" stroke-linecap="round">
  ${expression==='festa'?'<path d="M23 32l4 11 11 4-11 4-4 11-4-11-11-4 11-4Z" fill="white"/><path d="M190 57l3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" fill="white"/><path d="M178 16l3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="white"/>':''}
  <path d="M63 190l-6 25-20 3m99-28 5 25 18 3" fill="none" stroke-width="9"/>
  <path d="M54 143Q19 136 24 111" fill="none" stroke-width="13"/><path d="M54 143Q19 136 24 111" fill="none" stroke="#fff1bc" stroke-width="5"/>
  <path d="${expression==='festa'?'M157 143q39-18 36-47':'M157 143q36-8 38-43'}" fill="none" stroke-width="13"/><path d="${expression==='festa'?'M157 143q39-18 36-47':'M157 143q36-8 38-43'}" fill="none" stroke="#fff1bc" stroke-width="5"/>
  <path d="M183 97l7-8m3 9 6-8m-6 10 9-2" fill="none"/>
  <g fill="#fff1bc">
  <path d="M56 113 42 40q0-9 12-11l12 4 16 78Z"/><path d="M77 110 69 21q4-9 16-6l9 7 4 90Z"/>
  <path d="M99 111 101 34q3-7 16-6l8 6-7 80Z"/><path d="M119 114 134 25q6-7 17-2l6 8-21 85Z"/><path d="M140 113 158 48q5-7 16-1l5 9-23 64Z"/>
  </g><g stroke="none" fill="#dfbe74"><path d="m55 34 11 5 14 69-8 1Z"/><path d="m84 20 10 4 3 82-8 1Z"/><path d="m145 29 11 4-19 77-8-1Z"/><path d="m168 51 9 6-20 58-8-1Z"/></g>
  <path d="M46 105q55-13 116 0l-17 91q-39 16-80 0Z" fill="#C2304C"/>
  <path d="m137 108 25-3-17 91-21 7Z" fill="#92243b" stroke="none"/>
  <path d="M46 105q55-13 116 0l-3 18q-54-11-110 0Z" fill="#171717"/>
  <path d="M83 100q18-2 37 0l-1 18q-18-2-35 0Z" fill="#F5D130" stroke="none"/>
  <path d="M120 100q21 1 42 5l-3 18q-20-4-40-5Z" fill="#dc3d40" stroke="none"/>
  <path d="M91 93q-5-9 9-15q14-5 12-18q14 12 8 23q15-3 18 8q-2 13-21 10q-19 7-26-8Z" fill="#fffdf4" stroke-width="3.5"/>
  <g fill="none">${face[expression]||face.saluto}</g>
  <g stroke="none" fill="#ef8e94"><ellipse cx="68" cy="159" rx="7" ry="3"/><ellipse cx="134" cy="159" rx="7" ry="3"/></g>
  </g></svg>`;
}
