import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as status from './../../contants/status';

class SectorItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip();
        })
    }


    render() {
        let { sector } = this.props;
        let icon = status.renIcon(sector.status.status);
        return (
            <tr>
                <td>{sector.name}</td>
                <td>{sector.description}</td>
                <td className="text-center">
                    {this.props.update &&
                        <Fragment>
                            <a
                                data-toggle="tooltip"
                                data-original-title={sector.status.status === status.ACTIVE ? 'lock' : 'active'}
                                className="h-hand" onClick={this.props.updateStatus}
                                onClick={() => this.props.updateStatus(sector.id, sector.status.status === status.ACTIVE ? status.LOCK : status.ACTIVE)}
                            >
                                <i className={"w-1 fa fa-1x pd-rl-1 bd-r " + icon}></i>
                            </a>
                            <Link
                                data-original-title="Edit"
                                data-toggle="tooltip"
                                to={'/sector/update/' + sector.id}
                            >
                                <i className="w-1 fa fa-1x fa-edit bd-r pd-rl-1"></i>
                            </Link>
                        </Fragment>
                    }
                    {this.props.delete &&
                        <a
                            className="h-hand"
                            data-original-title="Delete"
                            data-toggle="tooltip"
                            onClick={() => this.props.updateStatus(sector.id, status.DELETE)}
                        >
                            <i className="w-1 fa fa-1x fa-trash pd-rl-1"></i>
                        </a>
                    }
                </td>
            </tr>
        );
    }
}

export default SectorItem;