// Quake View handler
export default class QuakesView {
  renderQuakeList(quakeList, listElement) {
    //build a list of the quakes...include the title and time of each quake then append the list to listElement. You should also add the id of the quake record as a data- property to the li. ie. <li data-id="">
    console.log(quakeList)
    listElement.innerHTML = quakeList.features
      .map(quake => `
        <div class="box">
          <div class="columns">
            <div class="column">
              <div class="title is-5 has-text-link">${quake.properties.place}</div>
            </div>
            <div class="column is-narrow">
              <div class="title is-5 has-text-danger">Magnitude ${quake.properties.mag}</div>
            </div>
          </div>
          <div class="subtitle">${new Date(quake.properties.time)}</div>
        </div>`)
      .join('');
  }

  renderQuake(quake, element) {
    const quakeProperties = Object.entries(quake.properties);
    // for the provided quake make a list of each of the properties associated with it. Then append the list to the provided element. Notice the first line of this method. Object.entries() is a slick way to turn an object into an array so that we can iterate over it easier! 
  }
}