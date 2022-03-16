import { connect } from "react-redux";
import {bindActionCreator} from "redux";
import ItemSelectedInCart from '../../components/ItemSelectedInCart/ItemSelectedInCart';
import { cartReducers } from '../cart/cartActions';

const mapStateToProps = () => {
    return {}
}

const mapDispatchTiProps = dispatch => ({
    ...bindActionCreator(cartReducers, dispatch),
})

export default connect (mapStateToProps,mapDispatchTiProps)(ItemSelectedInCart)