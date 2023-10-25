import NewPost from '../../Component/NewPost/NewPost'
import AllPost from '../../Component/AllPost/AllPost'
import './MainPage.css'
function MainPage(){


    return (
        <div className="mainpage-container">
            <NewPost />
            <AllPost />
        </div>
    )
}

export default MainPage