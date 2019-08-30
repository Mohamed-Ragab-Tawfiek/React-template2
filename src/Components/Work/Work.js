import React, { Component } from "react";
import { WorkSection, WorkPart, WorkTitle, Span, Icon, Line, PartDesc, PartTitle } from "./style.js";
import axios from "axios";

class Work extends Component {

  state = {
    works: []
  }

  componentDidMount() {
    axios.get('js/data.json').then(res => {this.setState({ works: res.data.works })})
  }

  render() {

    const {works} = this.state;
    const worksList = works.map(workItem => {
      return (
      <WorkPart key={workItem.id}>
            <Icon className={workItem.icon_name} />
            <PartTitle>{workItem.title}</PartTitle>
            <Line className="line" />
            <PartDesc>{workItem.body}</PartDesc>
        </WorkPart>
    )
  });
    return (
      <WorkSection>
        <div className="container">
          <WorkTitle>
            <Span>My Work</Span>
          </WorkTitle>
          <WorkPart>
            <Icon className="icon fa fa-chain fa-2x" />
            <PartTitle>Mobile Ux</PartTitle>
            <Line className="line" />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </WorkPart>

          <WorkPart>
            <Icon className="icon fa fa-bolt fa-2x" />
            <PartTitle>Mobile Ux</PartTitle>
            <Line />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </WorkPart>

          <WorkPart>
            <Icon className="icon fa fa-tachometer fa-2x" />
            <PartTitle>Mobile Ux</PartTitle>
            <Line />
            <PartDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus quos omnis voluptas ea ipsam! Voluptas.
            </PartDesc>
          </WorkPart>
        </div>
      </WorkSection>
    );
  }
}

export default Work;
