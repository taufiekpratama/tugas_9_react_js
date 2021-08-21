import ShowModal from "./ShowModal";
import {
  Button,
  Container,
  Row,
  Col,
  Media,
  Alert,
  Badge,
  Breadcrumb,
  ButtonGroup,
  ButtonToolbar,
  Card,
  Navbar,
  Nav,
  Dropdown,
  Figure,
  Carousel,
  ListGroup,
  Jumbotron,
  Form,
  FormControl,
  Modal,
  Image,
  NavDropdown,
  Table,
  Tabs,
  Tab,
  ProgressBar,
  Pagination,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import ShowCollapse from "./ShowCollapse";
function App() {
  const overTrigger = (
    <Popover>
      <Popover.Title>Informasi Website</Popover.Title>
      <Popover.Content>
        Website ini dibuat untuk memudahkan dalam pencarian informasi terkini
        tentang berita olahraga
      </Popover.Content>
    </Popover>
  );
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Berita</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Live Scores</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <NavDropdown title="Piala & Liga">
              <NavDropdown.Item>UCL</NavDropdown.Item>
              <NavDropdown.Item>EPL</NavDropdown.Item>
            </NavDropdown>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Transfer Pemain</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/">Tim</Nav.Link>
          </Nav.Item>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Form inline>
            <FormControl type="text" placeholder="silahkan cari" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Breadcrumb className="w-25 float-right">
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Liga Inggris</Breadcrumb.Item>
              <Breadcrumb.Item href="/" active>
                Transfer Pemain
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <h3>Rumor Transfer Pemain</h3>
          </Col>
          <Col></Col>
        </Row>
        <Tabs defaultActiveKey="allLiga">
          <Tab eventKey="allLiga" title="Semua Transfer">
            <br />
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Pemain</th>
                  <th>Tim</th>
                  <th>Transfer</th>
                  <th>Proses Transfer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>MAROUANE FELLAINI</td>
                  <td>MANCHESTER UNITED</td>
                  <td>SHANDONG LUNENG</td>
                  <td>
                    <ProgressBar now={85} striped label="85"/>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>LUIS NANI</td>
                  <td>SPORTING CP</td>
                  <td>ORLANDO CITY</td>
                  <td>
                    <ProgressBar now={55} striped label="55"/>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>MAREK HAMSIK</td>
                  <td>NAPOLI</td>
                  <td>DALIAN YIFANG</td>
                  <td>
                    <ProgressBar now={95} striped label="95"/>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>SARDAR AZMOUN</td>
                  <td>RUBIN KAZAN</td>
                  <td>ZENIT ST PETERSBURG</td>
                  <td>
                    <ProgressBar now={100} striped label="100"/>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>MICHY BATSHUAYI</td>
                  <td>CHELSEA</td>
                  <td>CRYSTAL PALACE</td>
                  <td>
                    <ProgressBar now={50} striped label="50"/>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>LUCAS PIAZON</td>
                  <td>CHELSEA</td>
                  <td>CHIEVO</td>
                  <td>
                    <ProgressBar now={100} striped label="100"/>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="liga1" title="Liga Premier Inggris"></Tab>
          <Tab eventKey="liga2" title="Serie A"></Tab>
          <Tab eventKey="liga3" title="Divisi Premera"></Tab>
          <Tab eventKey="liga4" title="Bundesliga"></Tab>
          <Tab eventKey="liga5" title="Liga 1 Indonesia"></Tab>
        </Tabs>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <Row xs={2} md={4} lg={6}>
          <Col lg={1}>
            <OverlayTrigger
              trigger="click"
              placement="right"
              overlay={overTrigger}
            >
              <Button variant="primary">Informasi</Button>
            </OverlayTrigger>
          </Col>
          <Col>
            <ShowCollapse />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
