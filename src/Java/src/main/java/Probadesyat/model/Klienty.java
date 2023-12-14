package Probadesyat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probadesyat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Клиенты
 */
@Entity(name = "IISProbadesyatКлиенты")
@Table(schema = "public", name = "Клиенты")
public class Klienty {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаимЗаказчика")
    private String наимзаказчика;

    @Column(name = "Телефон")
    private Integer телефон;

    @Column(name = "АдресПоставки")
    private String адреспоставки;

    @Column(name = "РасчетСчет")
    private Integer расчетсчет;


    public Klienty() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаимЗаказчика() {
      return наимзаказчика;
    }

    public void setНаимЗаказчика(String наимзаказчика) {
      this.наимзаказчика = наимзаказчика;
    }

    public Integer getТелефон() {
      return телефон;
    }

    public void setТелефон(Integer телефон) {
      this.телефон = телефон;
    }

    public String getАдресПоставки() {
      return адреспоставки;
    }

    public void setАдресПоставки(String адреспоставки) {
      this.адреспоставки = адреспоставки;
    }

    public Integer getРасчетСчет() {
      return расчетсчет;
    }

    public void setРасчетСчет(Integer расчетсчет) {
      this.расчетсчет = расчетсчет;
    }


}