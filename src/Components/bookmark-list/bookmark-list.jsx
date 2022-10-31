import BookmarkCard from "../bookmark-card/bookmark-card"; 


const BookmarkList = ({bookmark}) =>{
        return (
        <div className="grid grid-cols-4 gap-4">
            {bookmark.map((bookmark) => {
              return <BookmarkCard bookmark={bookmark}/>
              
            })}
            </div>);
           
    }


export default BookmarkList;