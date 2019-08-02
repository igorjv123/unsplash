import React from "react";


export default (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
        }


        static getDerivedStateToProps() {

        }

        componentDidMount() {

        }

        logger(){
            console.log("form logger")
        }

        render() {
            return (
                <div >
                    <Component {...this.props} logger={this.logger}/>
                </div>
            )
        }
    }
}