import React, { Component } from "react";
import { getAllBankDetailsService } from "../../Service/ApplicationService";
import BankListStyle from './BankListStyle';

export default class BankList extends Component {
    state = {
        bankList: [],
        networkError: false,
        isResponse: false
    };
    componentDidMount() {
        this.getBankList()
    }

    getBankList = async () => {
        await getAllBankDetailsService().then(response => {
            this.setState({ bankList: response, networkError: false, isResponse: true });
        }).catch(error => {
            this.setState({ networkError: true });
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h2 className="heading-text">Account Details</h2>
                <BankListStyle bankList={this.state.bankList} isResponse={this.state.isResponse} />
            </div>
        );
    }
}