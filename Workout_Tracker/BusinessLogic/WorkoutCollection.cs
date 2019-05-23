﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessLogic;

namespace BusinessLogic
{
    public class WorkoutCollection
    {
        public List<workout_collection> ListAllCollection()
        {
            try
            {
                WorkoutAppEntities db = new WorkoutAppEntities();
                return db.workout_collection.ToList();
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void AddCollection(workout_collection item)
        {
            try
            {
                WorkoutAppEntities db = new WorkoutAppEntities();
                db.workout_collection.Add(item);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        public void DeleteCollection(int id)
        {
            Console.WriteLine("enter the collection id to delete");
            int Id = int.Parse(Console.ReadLine());
            try
            {
                WorkoutAppEntities db = new WorkoutAppEntities();
                var ObjCollection = (from obj in db.workout_collection
                                     where obj.workout_id == Id
                                     select obj).First();
                db.workout_collection.Remove(ObjCollection);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        public void EditCategory(workout_collection item)
        {
            try
            {
                WorkoutAppEntities db = new WorkoutAppEntities();
                var ObjCategory = (from obj in db.workout_collection
                                   where obj.workout_id == item.workout_id
                                   select obj).First();

                ObjCategory.workout_title = item.workout_title;
                ObjCategory.workout_note = item.workout_note;
                ObjCategory.calories_burn_per_min = item.calories_burn_per_min;
                ObjCategory.category_id = item.category_id;
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
