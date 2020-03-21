import React, { Component, Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-bootstrap.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import moment from "moment";
import BlockUi from 'react-block-ui';
import './BankListStyle.css';

export default class BankListStyle extends Component {
    constructor(props) {
        super(props);
        this.onQuickFilterChanged = this.onQuickFilterChanged.bind(this);
        this.state = {
            loadExp: this.props.isResponse,
            bankList: this.props.bankList,
            gridOptions: {
                defaultColDef: {
                    resizable: true,
                    filter: true,
                    sortable: true
                },
                animateRows: true,
                columnDefs: [{
                    headerName: "Account No",
                    field: "Account No",
                    width: 190,
                    cellStyle: { textAlign: "center" },
                },
                {
                    headerName: "Date",
                    field: "Date",
                    sortable: true,
                    cellStyle: { textAlign: "center" },
                    cellRendererFramework: props => {
                        return (<div className="feed-time" >
                            {moment(new Date(props.data.Date)).format("YYYY-MM-DD")}
                        </div>
                        );
                    }
                },
                {
                    headerName: "Transaction Details",
                    field: "Transaction Details",
                    sortable: false,
                },
                {
                    headerName: "Value Date",
                    field: "Value Date",
                    sortable: true
                },
                {
                    headerName: "Withdrawal AMT",
                    field: "Withdrawal AMT",
                    sortable: false
                },
                {
                    headerName: "Deposit AMT",
                    field: "Deposit AMT",
                    sortable: false
                },
                {
                    headerName: "Balance AMT",
                    field: "Balance AMT",
                    sortable: true
                },
                ]
            }
        }
    }

    onQuickFilterChanged() {
        this.gridApi.setQuickFilter(document.getElementById("quickFilter").value);
    }

    onGridReady = params => {
        this.setState({
            gridParams: params
        });
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };

    render() {
        return (
            <Fragment >
                <ReactCSSTransitionGroup component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false} >

                    <input type="text"
                        name="search"
                        onInput={this.onQuickFilterChanged.bind(this)}
                        id="quickFilter"
                        placeholder="Search..." />
                    <div className="ag-theme-material list-modal" >
                        < BlockUi tag="div"
                            blocking={this.state.loadExp}
                            className="block-overlay-dark"
                            style={{ height: "600px" }} >
                            < AgGridReact onGridReady={this.onGridReady}
                                gridOptions={this.state.gridOptions}
                                pagination={true}
                                paginationPageSize={10}
                                rowData={this.props.bankList} >
                            </AgGridReact>
                        </BlockUi>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}