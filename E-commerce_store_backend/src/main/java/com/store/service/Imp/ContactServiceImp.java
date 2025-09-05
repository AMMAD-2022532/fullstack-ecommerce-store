package com.store.service.Imp;
import com.store.dto.ContactDto;
import com.store.dto.ProductDto;
import com.store.entity.Contact;
import com.store.entity.Product;
import com.store.repository.ContactRepository;
import com.store.service.IContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class ContactServiceImp  implements IContactService {

    private final ContactRepository contactRepository;


    @Override
    public boolean saveContact(ContactDto contactdto) {
        try {
            Contact contact = transferToEntity(contactdto);
            contact.setCreatedAt(Instant.now());
            contact.setCreatedBy(contactdto.getName());
            contactRepository.save(contact);
            return true;
        } catch (Exception exception) {
            return false;
        }
    }




    private Contact transferToEntity(ContactDto contactdto){

        Contact contact = new Contact();
        BeanUtils.copyProperties(contactdto, contact);
        return contact;


    }


}
