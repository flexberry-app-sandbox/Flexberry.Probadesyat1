package Probadesyat.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Probadesyat.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: ДокумПоставки
 */
@Entity(name = "IISProbadesyatДокумПоставки")
@Table(schema = "public", name = "ДокумПоставки")
public class DokumPostavki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "НомерДогов")
    private Integer номердогов;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Klienty")
    @Convert("Klienty")
    @Column(name = "Клиенты", length = 16, unique = true, nullable = false)
    private UUID _klientyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Klienty", insertable = false, updatable = false)
    private Klienty klienty;

    @OneToMany(mappedBy = "dokumpostavki", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<InfOZakaze> infozakazes;


    public DokumPostavki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Integer getНомерДогов() {
      return номердогов;
    }

    public void setНомерДогов(Integer номердогов) {
      this.номердогов = номердогов;
    }


}