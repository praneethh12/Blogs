import logo from './logo.svg';
import WebBase from './views/WebBase';
import Signpage from './views/sigin_up/Signpage';
import Homepage from './views/home_page/Homepage';
import Card from './views/card-view/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './views/profile/Profile';
import Tempone from './views/blog_create/Tempone';
import Template1 from './views/blog_create/template/Template1.js';
import Template2 from './views/blog_create/template/Template2.js';
import Template3 from './views/blog_create/template/Template3.js';
import Publogs from './views/profile/publishblogs/Publogs';
import Savblogs from './views/profile/savedblogs/Savblogs';
import Template11 from './views/blog_view/Template11';
import Template22 from './views/blog_view/Template22';
import Template33 from './views/blog_view/Template33'
import Viewblog from './views/view_blogs/Viewblog';


function App() {

  return (

    <div>

  
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path='/signup' element={<Signpage></Signpage>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          {/* <Route path='/createblog' element={<Tempone></Tempone>}></Route> */}

          {/* <Route exact path='/createblog/temp1' element={<Template1></Template1>}></Route>
          <Route exact path='/createblog/temp2' element={<Template2></Template2>}></Route>
          <Route exact path='/createblog/temp3' element={<Template3></Template3>}></Route> */}


          <Route exact path='/temp1' element={<Template1></Template1>}></Route>
          {/* <Route exact path='/temp1/temp1' element={<Template1></Template1>}></Route> */}
          <Route exact path='/temp1/temp2' element={<Template2></Template2>}></Route>
          <Route exact path='/temp1/temp3' element={<Template3></Template3>}></Route>
          <Route path='/dispblog' element={<Viewblog></Viewblog>}></Route>



          <Route exact path='/profile/publishblog' element={<Publogs></Publogs>}></Route>
          {/* <Route exact path='/profile/savedblog' element={<Savblogs></Savblogs>}></Route> */}

        </Routes>

  </BrowserRouter> 
  {/* <Viewblog></Viewblog> */}

    </div>

  );
}

export default App;
