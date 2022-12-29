import React from 'react';
import './Dashbord.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
// import Admin from './Admin/Admin';
// import DeshContent from './DeshContent';
// import Sonnet from '../../components/Sonnet';

const Dashbord = () => {
    return (
        <>
            <section className='container-fluid'>

                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                      
                        {/* <Col sm={9}>
                        <div className='tab_content'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                   <Admin />
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Admin />
                                </Tab.Pane>
                            </Tab.Content>
                            </div>
                        </Col> */}
                        
                    </Row>
                </Tab.Container>
            </section>

        </>
    );
};

export default Dashbord;