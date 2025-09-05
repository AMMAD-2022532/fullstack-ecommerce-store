package com.store.controller;
import com.store.dto.ContactDto;
import com.store.service.IContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/contacts")
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ContactController {
    private  final IContactService iContactService;
     @PostMapping
    public String saveContact( @RequestBody ContactDto contactdto){
         boolean isSaved = iContactService.saveContact(contactdto);
         if(isSaved){
             return "Request processed Successfully";
         }
         else{
             return "An error occurred . Please try again";
         }
     }


}
