const { Fragment } = require("react");
const { default: Navbar } = require("./Navbar");
const { default: ActiveResource } = require("./ActiveResource");

const Layout = ({children}) =>
<Fragment>
    <Navbar/>
    <ActiveResource/>
    {children}
</Fragment>

export default Layout