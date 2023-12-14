package Probadesyat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probadesyat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Организация
 */
@Entity(name = "IISProbadesyatОрганизация")
@Table(schema = "public", name = "Организация")
public class Organizaciya {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаимОрганиз")
    private String наиморганиз;


    public Organizaciya() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаимОрганиз() {
      return наиморганиз;
    }

    public void setНаимОрганиз(String наиморганиз) {
      this.наиморганиз = наиморганиз;
    }


}