 let books = [
            {
                title: "The Shadow",
                author: "Alex Holland",
                image: "1.jpg",
                borrowed: false
            },
            {
                title: "Charlotte's Web",
                author: "E. B. White",
                image: "2.jpg",
                borrowed: false
            },
            {
                title: "Book Of Last Names",
                author: "Kristin Harmel",
                image: "3.jpg",
                borrowed: false
            },
            {
                title: "A Window for One Year",
                author: "John Irving",
                image: "4.jpg",
                borrowed: false
            },
            {
                title: "One Glimpse of Tomorrow",
                author: "Harper Weston",
                image: "5.jpg",
                borrowed: false
            },
             {
                title: "The Secret of Secrets",
                author: "Dan Brown",
                image: "6.jpg",
                borrowed: false
            }
        ];

        function displayBooks(list){
        
        const bookList = document.getElementById("book-list");
        const message = document.getElementById("message");

        bookList.innerHTML="";

        if(list.length===0){
            message.textContent="No books found";
            return
        }
         message.textContent= "";  

            list.forEach(function(book){
            const index = books.indexOf(book)
             bookList.innerHTML +=`
        <div class="book-card">
         
         <img src="${book.image}" alt="image cover">
        <h3>${book.title}</h3>
        <p>${book.author}<p>

        <p class="status ${book.borrowed ? "Borrowed" : ""}">${book.borrowed ? "Borrowed" : "Available"}</p>
        <button onclick="toggle(${index})">${book.borrowed ? "Return" : "Borrow"}</button>
        <button onClick="deleteBook(${index})"}" class="delete-btn">Remove</button>
        </div>
        `
        })
    }

    function showBooks(){
     document.getElementById("search").value = "";
       displayBooks(books)
    }

    function deleteBook(index){
        const confirm = window.confirm("Do you want to remove this book?")
        if(confirm){
           books.splice(index,1)
           displayBooks(books)
        }
    }

    function toggle(index){
        books[index].borrowed = !books[index].borrowed;
        displayBooks(books)
    }


    function searchBooks(){
        const searchInput = document.getElementById("search").value.toLowerCase().trim()
        const filterBooks = books.filter(function(book){
          return  book.title.toLowerCase().trim().includes(searchInput) || 
         book.author.toLowerCase().trim().includes(searchInput)
        })
        displayBooks(filterBooks)
    }

  function addBook(){
     const bookTitle = document.getElementById("book-title").value.trim()
     const bookAuthor = document.getElementById("book-author").value.trim()
     const imgUrl = document.getElementById('img-url').value.trim()
 
      if(bookTitle === "" || bookAuthor === ""){
        alert("Please Enter a title or author name");
        return;
      }

         books.push({
           title:bookTitle,
           author:bookAuthor,
           image:imgUrl,
            borrowed:false
         })
          document.getElementById("book-title").value = "";
            document.getElementById("book-author").value = "";
            document.getElementById("img-url").value = "";
            document.getElementById("search").value = "";


            displayBooks(books);
            alert("Book added successfully!");
     }

     
        
       document.getElementById("search").addEventListener("input", searchBooks);
       displayBooks(books)
        