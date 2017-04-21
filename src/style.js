//style.js

const style = {
  commentBox: {
      width:'80vw',
      margin:'0 auto',
      fontFamily:'Arial, Helvetica, sans-serif'
    },
    title: {
      textAlign:'center',
      textTransform:'uppercase'
    },
    commentList: {
      border:'1px solid #f1f1f1',
      padding:'0 12px',
      maxHeight:'70vh',
      overflow:'auto'
    },
    comment: {
      backgroundColor:'#eee',
      margin:'10px',
      padding:'3px 10px',
      fontSize:'.85rem'
    },
    commentForm: {
      margin:'10px',
      display:'flex',
      flexFlow:'row wrap',
      justifyContent:'space-between'
    },
    commentFormAuthor: {
      minWidth:'150px',
      margin:'3px',
      padding:'0 10px',
      borderRadius:'3px',
      height:'40px',
      flex:'2'
    },
    commentFormText: {
      flex:'4',
      minWidth:'400px',
      margin:'3px',
      padding:'0 10px',
      height:'40px',
      borderRadius:'3px'
    },
    commentFormPost: {
      minWidth:'75px',
      flex:'1',
      height:'40px',
      margin:'5px 3px',
      backgroundColor:'#258FCA',
      borderRadius:'3px',
      color:'#fff',
      textTransform:'uppercase',
      letterSpacing:'.055rem',
      border:'none'
    },
    updateLink: {
      textTransform: 'uppercase',
      textDecoration:'none',
      paddingRight:'15px',
      fontSize:'.7rem'
    },
    deleteLink: {
      textTransform: 'uppercase',
      textDecoration:'none',
      paddingRight:'15px',
      fontSize:'.7rem',
      color:'red'
    },
    commentBoxFooter: {
      color:'#aaa',
      fontSize:'.5rem',
      textAlign:'center'
    }
};
module.exports = style;
