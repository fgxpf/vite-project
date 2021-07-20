<template>
  <div id="map-container"></div>
</template>


<script>
import { onMounted } from 'vue'
// import Map from './index.ts'

import { Scene } from "@antv/l7";
import { Mapbox } from "@antv/l7-maps";

export default {
  setup (props, { attrs, slots, emit }) {

    onMounted(() => {
      const scene = new Scene({
        id: "map",
        map: new Mapbox({
          style: "dark",
          pitch: 0, //地图初始俯仰角度
          center: [127.5671666579043, 7.445038892195569],
          zoom: 2.632456779444394,
        }),
      });
    });

    return {
      scene
    };
  }
}
</script>
