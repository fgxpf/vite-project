import { Scene } from '@antv/l7'
import { Mapbox } from '@antv/l7-maps'

class Map {
  public scene: any

  constructor(container: string) {
    console.log(1111)
    this.scene = new Scene({
      id: container,
      map: new Mapbox({
        style: 'dark',
        pitch: 0, //地图初始俯仰角度
        center: [127.5671666579043, 7.445038892195569],
        zoom: 2.632456779444394
      })
    })
  }
}


export default Map
