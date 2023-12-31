﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probadesyat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Докум поставки.
    /// </summary>
    // *** Start programmer edit section *** (ДокумПоставки CustomAttributes)

    // *** End programmer edit section *** (ДокумПоставки CustomAttributes)
    [AutoAltered()]
    [Caption("Документ поставки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДокумПоставкиE", new string[] {
            "Дата as \'Дата\'",
            "НомерДогов as \'Номер документа поставки\'",
            "Организация as \'Организация\'",
            "Организация.НаимОрганиз as \'Наименование организации\'",
            "Клиенты as \'Клиенты\'",
            "Клиенты.НаимЗаказчика as \'Заказчик\'"}, Hidden=new string[] {
            "Организация.НаимОрганиз",
            "Клиенты.НаимЗаказчика"})]
    [AssociatedDetailViewAttribute("ДокумПоставкиE", "ИнфОЗаказе", "ИнфОЗаказеE", true, "", "Информация о заказе", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ДокумПоставкиE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимОрганиз")]
    [MasterViewDefineAttribute("ДокумПоставкиE", "Клиенты", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НаимЗаказчика")]
    [View("ДокумПоставкиL", new string[] {
            "Дата as \'Дата\'",
            "НомерДогов as \'Номер документа поставки\'",
            "Организация.НаимОрганиз as \'Наименование организации\'",
            "Клиенты.НаимЗаказчика as \'Заказчик\'"})]
    public class ДокумПоставки : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомерДогов;
        
        private IIS.Probadesyat.Организация fОрганизация;
        
        private IIS.Probadesyat.Клиенты fКлиенты;
        
        private IIS.Probadesyat.DetailArrayOfИнфОЗаказе fИнфОЗаказе;
        
        // *** Start programmer edit section *** (ДокумПоставки CustomMembers)

        // *** End programmer edit section *** (ДокумПоставки CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.Дата CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.Дата Get start)

                // *** End programmer edit section *** (ДокумПоставки.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ДокумПоставки.Дата Get end)

                // *** End programmer edit section *** (ДокумПоставки.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.Дата Set start)

                // *** End programmer edit section *** (ДокумПоставки.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ДокумПоставки.Дата Set end)

                // *** End programmer edit section *** (ДокумПоставки.Дата Set end)
            }
        }
        
        /// <summary>
        /// НомерДогов.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.НомерДогов CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.НомерДогов CustomAttributes)
        public virtual int НомерДогов
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.НомерДогов Get start)

                // *** End programmer edit section *** (ДокумПоставки.НомерДогов Get start)
                int result = this.fНомерДогов;
                // *** Start programmer edit section *** (ДокумПоставки.НомерДогов Get end)

                // *** End programmer edit section *** (ДокумПоставки.НомерДогов Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.НомерДогов Set start)

                // *** End programmer edit section *** (ДокумПоставки.НомерДогов Set start)
                this.fНомерДогов = value;
                // *** Start programmer edit section *** (ДокумПоставки.НомерДогов Set end)

                // *** End programmer edit section *** (ДокумПоставки.НомерДогов Set end)
            }
        }
        
        /// <summary>
        /// Докум поставки.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.Клиенты CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Probadesyat.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.Клиенты Get start)

                // *** End programmer edit section *** (ДокумПоставки.Клиенты Get start)
                IIS.Probadesyat.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (ДокумПоставки.Клиенты Get end)

                // *** End programmer edit section *** (ДокумПоставки.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.Клиенты Set start)

                // *** End programmer edit section *** (ДокумПоставки.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (ДокумПоставки.Клиенты Set end)

                // *** End programmer edit section *** (ДокумПоставки.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Докум поставки.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.Организация CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Probadesyat.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.Организация Get start)

                // *** End programmer edit section *** (ДокумПоставки.Организация Get start)
                IIS.Probadesyat.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (ДокумПоставки.Организация Get end)

                // *** End programmer edit section *** (ДокумПоставки.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.Организация Set start)

                // *** End programmer edit section *** (ДокумПоставки.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (ДокумПоставки.Организация Set end)

                // *** End programmer edit section *** (ДокумПоставки.Организация Set end)
            }
        }
        
        /// <summary>
        /// Докум поставки.
        /// </summary>
        // *** Start programmer edit section *** (ДокумПоставки.ИнфОЗаказе CustomAttributes)

        // *** End programmer edit section *** (ДокумПоставки.ИнфОЗаказе CustomAttributes)
        public virtual IIS.Probadesyat.DetailArrayOfИнфОЗаказе ИнфОЗаказе
        {
            get
            {
                // *** Start programmer edit section *** (ДокумПоставки.ИнфОЗаказе Get start)

                // *** End programmer edit section *** (ДокумПоставки.ИнфОЗаказе Get start)
                if ((this.fИнфОЗаказе == null))
                {
                    this.fИнфОЗаказе = new IIS.Probadesyat.DetailArrayOfИнфОЗаказе(this);
                }
                IIS.Probadesyat.DetailArrayOfИнфОЗаказе result = this.fИнфОЗаказе;
                // *** Start programmer edit section *** (ДокумПоставки.ИнфОЗаказе Get end)

                // *** End programmer edit section *** (ДокумПоставки.ИнфОЗаказе Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ДокумПоставки.ИнфОЗаказе Set start)

                // *** End programmer edit section *** (ДокумПоставки.ИнфОЗаказе Set start)
                this.fИнфОЗаказе = value;
                // *** Start programmer edit section *** (ДокумПоставки.ИнфОЗаказе Set end)

                // *** End programmer edit section *** (ДокумПоставки.ИнфОЗаказе Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДокумПоставкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокумПоставкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокумПоставкиE", typeof(IIS.Probadesyat.ДокумПоставки));
                }
            }
            
            /// <summary>
            /// "ДокумПоставкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДокумПоставкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДокумПоставкиL", typeof(IIS.Probadesyat.ДокумПоставки));
                }
            }
        }
    }
}
