import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../models/book.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './bookList.component.html',
  styleUrls: ['./bookList.component.css']
})
export class BookListComponent implements OnInit {

  books : Book[] = [];
  bookSubscription: Subscription | undefined;
  genderFilter : string = "";
  searchFilter : string = "";
  sortMode : string = "reference";

  constructor(private booksService : BooksService, private router : Router) { 
    //console.log(products);
    //products[1].auteur;
  }

  ngOnInit(): void {
    this.bookSubscription = this.booksService.booksSubject.subscribe(
      (books: Book[]) => {
        this.books = books;
      }
    );
    this.booksService.getBooks();
    this.booksService.emitBooks();
    console.log(this.booksService.books);
  }

}
