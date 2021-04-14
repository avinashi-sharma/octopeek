import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './dist/style.css';
import NavItem from './NavItem';
import { handleDrawerToggleChange } from '../../../store/actions/adminActions';

class Drawer extends Component{
    componentDidMount() {
        const slidedrop = document.querySelectorAll(".drawer-navmenu");
        for (const slideitem of slidedrop) {
          const items = slideitem.querySelectorAll(".drawer-item");
          for (const item of items) {
            const head = item.querySelector(".drawer-link");
            head.addEventListener('click', () => {
              for (const otherPanel of items) {
                if (otherPanel !== item) {
                  otherPanel.classList.remove('open');
                }
              }
              item.classList.toggle('open');
            });
          }
        }
    }
    handleDrawerToggle(e){
        this.props.dispatch(handleDrawerToggleChange(!this.props.toggleStatus));
      }
    render(){
        return(
            <aside className={this.props.toggleStatus ? "drawer-wrapper" : "drawer-wrapper closed"}>
                <nav className="drawer-navigation">
                    <span className="navgroup-title">Main </span>
                    <ul className="drawer-navmenu">
                        <NavItem navMenuTitle="Create Admin"  navMenuIcon={""} navURL="/admin/create"></NavItem>
                        <NavItem navMenuTitle="View Admin"  navMenuIcon={""} navURL="/admin/listing"></NavItem>
                    </ul>
                </nav>
            </aside>
        )
    }
}

function mapStateToProps(state) {
    const {toggleStatus} = state.appReducer;
    return {toggleStatus}
}
export default withRouter(connect(mapStateToProps)(Drawer));
