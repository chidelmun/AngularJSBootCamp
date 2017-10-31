import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input() title: string;
  @Input() selectedItem: number = 0;
  item: { 'title': string, 'description': string, 'due': string, 'done': boolean};
  // tslint:disable:max-line-length
  todolist:
  { 'title': string, 'description': string, 'due': string, 'done': boolean}[]
 = [{'title': 'Nulla ut erat id mauris v', 'description': 'Fusce consequat. Nulla nisl. Nunc nisl.', 'due': '9/9/2017', 'done': true}, {'title': 'Fusce consequat.', 'description': 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 'due': '9/9/2017', 'done': true}, {'title': 'Maecenas tristique, est e', 'description': 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'due': '9/10/2017', 'done': false}, {'title': 'Sed accumsan felis.', 'description': 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'due': '9/11/2017', 'done': true},  {'title': 'Duis aliquam convallis nu', 'description': 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 'due': '9/9/2017', 'done': false},  {'title': 'Maecenas pulvinar loborti', 'description': 'Phasellus in felis. Donec semper sapien a libero. Nam dui.', 'due': '9/11/2017', 'done': false},  {'title': 'Quisque erat eros, viverr', 'description': 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 'due': '9/9/2017', 'done': false},  {'title': 'Donec vitae nisi.', 'description': 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 'due': '9/11/2017', 'done': false}, {'title': 'Maecenas tristique, est e', 'description': 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 'due': '9/11/2017', 'done': false}, {'title': 'Mauris ullamcorper purus ', 'description': 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 'due': '9/11/2017', 'done': false} ];

  constructor() { }

  ngOnInit() {
    this.item = this.todolist[this.selectedItem];
  }

}
