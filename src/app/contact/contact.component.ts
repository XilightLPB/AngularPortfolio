import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { delay } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  WebHookUrl="https://webhook.site/cef489d4-df51-4139-9605-333e6e57efc9";
  DiscordWebHook="https://discord.com/api/webhooks/1149383738451570760/KN89AubTHEnBfS8clHYa2R-yumK24gslGGH78SvqY-PG44nUOftGbDJ9YF7-_eXDY6W0";

  ngOnInit(): void {
    console.log("start doing things");
    //this.getData();
  }

  name = new FormControl('');
  Fname = new FormControl('');
  mail = new FormControl('');
  tel = new FormControl('');
  title = new FormControl('');
  formContent = new FormControl('');
  acceptCond = new FormControl();
  Success: boolean = false;





  //function to handle the backend
  logTest(){
    console.log("I've been logged");
  }

  resetForm(){
    let Button = document.getElementById("submitButton");
    if (Button != null)
    {
    Button.innerHTML = "Submit";
    }
    this.name = new FormControl('');
    this.Fname = new FormControl('');
    this.mail = new FormControl('');
    this.tel = new FormControl('');
    this.title = new FormControl('');
    this.formContent = new FormControl('');
    this.acceptCond = new FormControl();
    this.Success = false;
  }

  getData(){
    let Message = "default message";
    let name = this.name.value;
    let Fname = this.Fname.value;
    let mail = this.mail.value;
    let tel = this.tel.value;
    let title = this.title.value;
    let content = this.formContent.value;
    let botname = `${Fname} ${name}`;
    Message = `Mail: ${mail}\nTel: ${tel}\n**${title}**\n${content}`;
    //console.log(Message);
    this.sendMessage(Message, botname);

    let Button = document.getElementById("submitButton");

    if (Button != null){
      console.log("Updating the button");
      Button.innerHTML = "Sent with success";
      this.Success = true;
      setTimeout( () => this.resetForm(),3000);
    }
  }

  sendMessage(Message:string, Name:string) {
    console.log("let's try to send a request")
    var request = new XMLHttpRequest();
    request.open("POST", this.DiscordWebHook );

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
    username: Name,
    avatar_url: "",
    content: Message
    }

    request.send(JSON.stringify(params));
  }
}
