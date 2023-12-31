package Probadesyat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probadesyat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Товары
 */
@Entity(name = "IISProbadesyatТовары")
@Table(schema = "public", name = "Товары")
public class Tovary {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаимТовара")
    private String наимтовара;

    @Column(name = "Производит")
    private String производит;

    @Column(name = "ЕдиницыИзм")
    private String единицыизм;

    @Column(name = "Цена")
    private Integer цена;

    @Column(name = "Масса")
    private Integer масса;


    public Tovary() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаимТовара() {
      return наимтовара;
    }

    public void setНаимТовара(String наимтовара) {
      this.наимтовара = наимтовара;
    }

    public String getПроизводит() {
      return производит;
    }

    public void setПроизводит(String производит) {
      this.производит = производит;
    }

    public String getЕдиницыИзм() {
      return единицыизм;
    }

    public void setЕдиницыИзм(String единицыизм) {
      this.единицыизм = единицыизм;
    }

    public Integer getЦена() {
      return цена;
    }

    public void setЦена(Integer цена) {
      this.цена = цена;
    }

    public Integer getМасса() {
      return масса;
    }

    public void setМасса(Integer масса) {
      this.масса = масса;
    }


}