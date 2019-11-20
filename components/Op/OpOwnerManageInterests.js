import { Button, Divider, message, Popconfirm } from 'antd'
import Router from 'next/router'
import { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import InterestSection from '../../components/Interest/InterestSection'
import styled from 'styled-components'



const ControlGrid = styled.div`
display: grid;
grid-template-columns: 5fr 2fr;

align-self: center;

@media screen and (min-width: 768px) and (max-width: 1281px) {
    grid-template-columns: 1fr 13rem;
    grid-column-gap: 2rem;
  }


@media screen and (max-width: 768px) {
    grid-template-columns: calc(100vw - 2rem);
  }

`


export default class OpOwnerManageInterests extends Component {
  constructor (props) {
    super(props)
    this.handleCompleted = this.handleCompleted.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  async handleCompleted () {
    if (!this.props.op) return
    // Confirm Opportunity via Callback
    await this.props.confirmOpportunity(this.props.op)
    message.success('Opportunity Confirmed')
    Router.replace(`/archivedops/${this.props.op._id}`)
  }

  async handleCancel () {
    if (!this.props.op) return
    // Confirm Cancel via Callback
    await this.props.cancelOpportunity(this.props.op)
    message.success('Request Cancelled')
    Router.replace('/home')
  }

  handleCancelButtonCancelled = () => {
    message.error('Cancel Request Cancelled')
  }

  handleCompletedCancelled = () => {
    message.error('Confirm Cancelled')
  }

  render () {
    return (
      this.props.canManageInterests &&
        <section>
              <Divider />
          <ControlGrid>
            <h5><strong>Finish this activity</strong><br />This will end the activity and mark it as complete</h5>
          <Popconfirm id='completedOpPopConfirm' title='Confirm completion of this opportunity.' onConfirm={this.handleCompleted} onCancel={this.handleCompletedCancelled} okText='Yes' cancelText='No'>
            <Button type='primary' shape='round' size='large'>
              <FormattedMessage id='completedOp' defaultMessage='Completed' description='Button to confirm opportunity is completed on OpDetails page' />
            </Button>
          </Popconfirm>
          </ControlGrid>
          <Divider />
          <ControlGrid>
          <h5><strong>Cancel this activity</strong><br />This will end the activity and stop volunteers from seeing it</h5>
          <Popconfirm id='cancelOpPopConfirm' title='Confirm cancel of this opportunity.' onConfirm={this.handleCancel} onCancel={this.handleCancelButtonCancelled} okText='Yes' cancelText='No'>
            <Button type='danger' shape='round' size='large'>
              <FormattedMessage id='cancelOp' defaultMessage='Cancel Request' description='Button to cancel an opportunity on OpDetails page' />
            </Button>
          </Popconfirm>
          </ControlGrid>
          <Divider />
          <InterestSection opid={this.props.op._id} />
        </section>
    )
  }
}
