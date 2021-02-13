import React, {Component} from 'react'

export default class BadgesList extends Component {
    render(){
        return (
            <ul className="list-unstyled">
                            {this.props.badges.map((Badge)=>{
                                return(
                                    <li key={Badge.id}>
                                        <p>{Badge.firstName} {Badge.lastName}</p>
                                    </li>
                                )
                            })}

                            </ul>
        )
    }    
}
