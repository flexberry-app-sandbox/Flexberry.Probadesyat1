package Probadesyat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probadesyat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ПунктПогрузки
 */
@Entity(name = "IISProbadesyatПунктПогрузки")
@Table(schema = "public", name = "ПунктПогрузки")
public class PunktPogruzki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Адрес")
    private String адрес;

    @Column(name = "НаимПунктаПог")
    private String наимпунктапог;


    public PunktPogruzki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getАдрес() {
      return адрес;
    }

    public void setАдрес(String адрес) {
      this.адрес = адрес;
    }

    public String getНаимПунктаПог() {
      return наимпунктапог;
    }

    public void setНаимПунктаПог(String наимпунктапог) {
      this.наимпунктапог = наимпунктапог;
    }


}