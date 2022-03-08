import { Component } from "react";


export default class EventDetector extends Component {
  constructor(props: any) {
    super(props);
    window.addEventListener("beforeunload", (ev) => {
      ev.preventDefault();
      return ev.returnValue = 'Are you sure you want to close?';
    });
  }

  componentWillUnmount() {

  }

  saveEpisodeData() {

  }

  render() {
    return <div {...this.props} />
  }
}
