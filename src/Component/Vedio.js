import {Component} from "react";
import vedio from './vedio/vedio1.webm';

class Vedio extends Component{
    render()
    {
        return(
            <div>
                <video width="500" controls>
                    <source src={vedio} />
                </video>
            </div>
        )
    }
}
export default Vedio;