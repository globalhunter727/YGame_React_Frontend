import React from "react";
import $ from 'jquery';
import Styles from './Menu.scss';

class Menu1 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {

		};
	}

	componentDidMount() {
		const newLocal = '.menu1-item';
		$(document).on('mouseover', newLocal, function () {
			$(".menu1-item.active").removeClass('active');
			$(this).addClass('active');
		});
	}

	render() {
		let menuClass = Styles.first;
		let activeClass = Styles.active;

		return (
			<div className="first menu-item">
				<ul>
					{this.props.items.map((item) =>
						item.isParent ?
							<li className="menu1-item menu-item" key={item.text} onMouseOver={this.props.onMouseOver.bind(this, item.isParent)}><a href="/product">{item.text} {item.isParent ? <i></i> : ''}</a></li> :
							<li className="menu1-item" key={item.text} onMouseOver={this.props.onMouseOver.bind(this, item.isParent)}><a href="/product">{item.text} {item.isParent ? <i></i> : ''}</a></li>
					)}
				</ul>
			</div>
		)
	}
}

export default Menu1