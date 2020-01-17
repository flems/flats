<template>
  <div class="loader">
    <svg viewBox="0 0 352 463">
      <g id="footer" >
      <path d="M345.9,425v21h-330v-21H345.9 M348.9,410h-336c-6.6,0-12,5.4-12,12v27c0,6.6,5.4,12,12,12h336c6.6,0,12-5.4,12-12v-27
        C360.9,415.4,355.5,410,348.9,410L348.9,410z"/>
      </g>
      <g id="door" >
        <path d="M223.4,366v44h-85v-44H223.4 M226.4,351h-91c-6.6,0-12,5.4-12,12v50c0,6.6,5.4,12,12,12h91c6.6,0,12-5.4,12-12v-50
          C238.4,356.4,233,351,226.4,351L226.4,351z"/>
      </g>
      <g id="wall" style="stroke-width:15;">
        <line class="st0" x1="39.5" y1="89.5" x2="39.5" y2="417.5"/>
        <line class="st0" x1="323.5" y1="88.5" x2="323.5" y2="416.5"/>
      </g>
      <g id="chimney">
        <path d="M286.7,11c0.2,0,0.3,0.2,0.3,0.3v19.3c0,0.2-0.2,0.3-0.3,0.3h-9.3c-0.2,0-0.3-0.2-0.3-0.3V11.3c0-0.2,0.2-0.3,0.3-0.3
          H286.7 M286.7,1h-9.3C271.6,1,267,5.6,267,11.3v19.3c0,5.7,4.6,10.3,10.3,10.3h9.3c5.7,0,10.3-4.7,10.3-10.3V11.3
          C297,5.6,292.4,1,286.7,1L286.7,1z"/>
      </g>
      <g id="header">
        <path fill="#fff" d="M27.9,84c-2.4,0-4.5-2.1-4.5-4.5v-36c0-2.4,2.1-4.5,4.5-4.5h306c2.4,0,4.5,2.1,4.5,4.5v36   c0,2.4-2.1,4.5-4.5,4.5H27.9z"/>
        <path d="M330.9,46.5v30h-300v-30H330.9 M333.9,31.5h-306c-6.6,0-12,5.4-12,12v36c0,6.6,5.4,12,12,12h306c6.6,0,12-5.4,12-12v-36   C345.9,36.9,340.5,31.5,333.9,31.5L333.9,31.5z"/>
      </g>
      <g id="window-3" >
        <path d="M150,135v46H77v-46H150 M153,120H74c-6.6,0-12,5.4-12,12v52c0,6.6,5.4,12,12,12h79c6.6,0,12-5.4,12-12v-52
          C165,125.4,159.6,120,153,120L153,120z"/>
      </g>
      <g id="window-4" >
        <path d="M284,135v46h-73v-46H284 M287,120h-79c-6.6,0-12,5.4-12,12v52c0,6.6,5.4,12,12,12h79c6.6,0,12-5.4,12-12v-52
          C299,125.4,293.6,120,287,120L287,120z"/>
      </g>
      <g id="window-1" >
        <path d="M150,239v46H77v-46H150 M153,224H74c-6.6,0-12,5.4-12,12v52c0,6.6,5.4,12,12,12h79c6.6,0,12-5.4,12-12v-52
          C165,229.4,159.6,224,153,224L153,224z"/>
      </g>
      <g id="window-2" >
        <path d="M284,239v46h-73v-46H284 M287,224h-79c-6.6,0-12,5.4-12,12v52c0,6.6,5.4,12,12,12h79c6.6,0,12-5.4,12-12v-52
          C299,229.4,293.6,224,287,224L287,224z"/>
      </g>

      <animate
        href="#footer"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;block;block;block;block;block;block;block;block;block;"
        id="footer-anim"
        fill="freeze"
        begin="0.5s;footer-anim.end+1s"
      />
      <animate
        href="#door"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;none;block;block;block;block;block;block;block;block;"
        begin="footer-anim.begin+0s"
        id="door-anim"
        fill="freeze"
      />
      <animate
        href="#wall"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;none;none;block;block;block;block;block;block;block;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="wall-anim"
      />
      <animate
        href="#window-1"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;none;none;none;block;block;block;block;block;block;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="window-1-anim"
      />
      <animate
        href="#window-2"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;none;none;none;none;block;block;block;block;block;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="window-2-anim"
      />
      <animate
        href="#window-3"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;none;none;none;none;none;block;block;block;block;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="window-3-anim"
      />
      <animate
        href="#window-4"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;none;none;none;none;none;none;block;block;block;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="window-4-anim"
      />
      <animate
        href="#header"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;none;none;none;none;none;none;none;block;block;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="header-anim"
      />
      <animateTransform
        href="#header"
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="1.1s"
        values="0 0; 0 0; 0 0; 0 0; 0 0; 0 0; 0 0; 0 0; 0 -30; 0 0;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="header-bounds-anim"
      />
      <animate
        href="#chimney"
        attributeName="display"
        attributeType="CSS"
        dur="1.1s"
        values="none;none;none;none;none;none;none;none;none;block;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="chimney-anim"
      />
      <animateTransform
        href="#chimney"
        attributeName="transform"
        attributeType="XML"
        type="translate"
        dur="1.1s"
        values="0 25; 0 25; 0 25; 0 25; 0 25; 0 25; 0 25; 0 25; 0 25; 0 25; 0 25;0 25; 0 0;"
        begin="footer-anim.begin+0s"
        fill="freeze"
        id="chimney-transform-anim"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style lang="scss" scoped>
  .loader {
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    svg {
      position: absolute;
      position: sticky;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 80px;
      height: 80px;
      fill: $pink;
      stroke: $pink;
    }
  }
  @media (max-width: 1366px) {
    .loader {
      svg {
        top: 10%;
      }
    }
  }
  @media (max-width: 1024px) {
    .loader {
      svg {
        top: 5%;
      }
    }
  }
  @media (max-width: 768px) {
    .loader {
      svg {
        top: 3%;
      }
    }
  }

</style>
